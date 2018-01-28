import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog'
import {VideoDialogComponent, VideoDialogContext} from './video-dialog.component';

@Component({
  selector: 'video-player',
  templateUrl: '/src/components/workout-runner/video-player/video-player.html'
})
export class VideoPlayerComponent {
  @Input() videos: Array<string>;
  @Output() playbackStarted: EventEmitter<any> = new EventEmitter<any>();
  @Output() playbackEnded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modal: Modal) { }

  playVideo(videoId: string) {
    this.playbackStarted.emit(null);
    
    var dialog = this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
    dialog
      .then((d) => d.result)
      .then(() => { this.playbackEnded.emit(null); }, (error) => { this.playbackEnded.emit(null); });
  };
}