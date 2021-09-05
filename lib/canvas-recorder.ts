export default class CanvasRecorder {
  private canvas: HTMLCanvasElement;
  private serverUploadUrl: string = "http://localhost:3000/upload";
  private isRecording: boolean;
  private currentFrameNumber: number;
  private sessionRecordName: string;
  private sketchName: string;

  get isRunning() {
    return this.isRecording;
  }

  constructor(canvas: HTMLCanvasElement, sketchName: string = "sketch") {
    this.canvas = canvas;
    this.isRecording = false;
    this.sketchName = sketchName;
  }

  update() {
    if (!this.isRecording) return;

    this.currentFrameNumber += 1;

    const dataUrl = this.canvas.toDataURL("image/png", 1);
    const formData = new FormData();

    formData.append("sessionName", this.sessionRecordName);
    formData.append("frameId", this.currentFrameNumber.toString());
    formData.append("frameDataUrl", dataUrl);

    var request = new XMLHttpRequest();
    request.open("POST", this.serverUploadUrl);
    request.send(formData);
  }

  toggle() {
    if (this.isRecording) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    if (this.isRecording) {
      return;
    }

    this.currentFrameNumber = 0;
    this.isRecording = true;
    this.sessionRecordName = `${this.sketchName}-${new Date()
      .getTime()
      .toString()}`;
    this.log(`START the capture for session : ${this.sessionRecordName}`);
  }

  stop() {
    if (!this.isRecording) {
      return;
    }

    // TODO: Having a get endpoint based on the sessionRecordName that return directly a gif

    this.isRecording = false;
    this.log(`STOP the capture for session : ${this.sessionRecordName}`);
  }

  private log(msg: string) {
    console.log(msg);
  }
}
