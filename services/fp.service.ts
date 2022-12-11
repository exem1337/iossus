import fs from 'fs';

export default class FileProcessor {
  private staticStorage;

  constructor(staticStorage) {
    this.staticStorage = staticStorage;
  }

  public bufferToStatic(buffer) {
    const key = this.staticStorage + buffer.name;
    fs.writeFileSync(key, buffer.data);
    return key;
  }
  public bufferToBase64(fileName) {
    const key = this.staticStorage + fileName;
  } 
}