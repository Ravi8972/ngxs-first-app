import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BucketState } from '../../../store/states/bucket.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Bucket } from '../../../Interfaces/backet.interface';

@Component({
  selector: 'app-bucket',
  // standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {
  myBucket$: Observable<Bucket[]>;
  constructor(private store: Store) {
    this.myBucket$ = this.store.select(BucketState.getMyBucket);
  }
}
