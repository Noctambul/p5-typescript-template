export default class CanvasRecorder {
  #canvas: HTMLCanvasElement;
  #mediaRecorder: MediaRecorder;
  #chunks: Array<Blob>;
  #isRunning: Boolean;

  get isRunning() {
    return this.#isRunning;
  }

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;
    this.#isRunning = false;
    this.#chunks = [];

    const mediaStream: MediaStream = this.#canvas.captureStream();
    this.#mediaRecorder = new MediaRecorder(mediaStream);

    this.#mediaRecorder.ondataavailable = (e) => {
      this.#chunks.push(e.data);
    };

    this.#mediaRecorder.onstop = (e) => {
      const blob = new Blob(this.#chunks, { type: "video/mp4 " });
      this.#chunks = [];
      const videoUrl = URL.createObjectURL(blob);
      window.open(videoUrl);
      // videoUrl.src
    };
  }

  start() {
    if (!this.#isRunning) {
      console.log("[CanvasRecorder] - Start recording.");
      this.#isRunning = true;
      this.#mediaRecorder.start();
    }
  }

  stop() {
    if (this.#isRunning) {
      console.log("[CanvasRecorder] - Stop recording.");
      this.#isRunning = false;
      this.#mediaRecorder.stop();
    }
  }
}
