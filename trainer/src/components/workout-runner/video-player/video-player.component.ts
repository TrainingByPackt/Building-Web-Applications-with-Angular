import {Component, Input, Injector} from '@angular/core';
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

  constructor(private modal: Modal) { }

  playVideo(videoId: string) {
    this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
  };
}