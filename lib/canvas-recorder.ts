import { io } from "socket.io-client";

export default class CanvasRecorder {
  private canvas: HTMLCanvasElement;
  private socket;
  private serverUrl: string = "http://localhost:3000";
  private isRecording: boolean;
  private isConnected: boolean;
  private currentFrameNumber: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.socket = io(this.serverUrl);
    this.socket.on("connect_error", (e) => {
      this.isRecording = false;
      this.isConnected = false;
      this.log(
        `Connection error, the web server seems to not be running at '${this.serverUrl}'.`
      );
    });

    this.socket.on("record-stopped", this.onRecordStopped.bind(this));

    this.isConnected = true;
  }

  update() {
    if (this.isRecording && this.isConnected) {
      this.currentFrameNumber += 1;

      const dataUrl = this.canvas.toDataURL("image/png", 1);
      this.socket.emit("capture", dataUrl, this.currentFrameNumber);
    }
  }

  toggle() {
    if (this.isRecording) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    if (this.isRecording || !this.isConnected) {
      return;
    }

    this.currentFrameNumber = 0;
    this.isRecording = true;
    this.log("START the capture !");
  }

  stop() {
    if (!this.isRecording) {
      return;
    }

    this.socket.emit("stop-capture");
    this.isRecording = false;
    this.log("STOP the capture !");
  }

  private onRecordStopped(opts) {
    this.log(
      `Stop recording with '${opts.nbFiles}' files recorded. ${
        this.currentFrameNumber - opts.nbFiles
      } file lost.`
    );
  }

  private log(msg: string) {
    console.log(msg);
  }
}
