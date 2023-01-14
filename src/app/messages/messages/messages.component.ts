import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { CommonModule } from '@angular/common';
// materials
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatPaginatorModule,
  MatPaginator,
  PageEvent,
} from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from 'src/app/store/message.model';
import { Store } from '@ngrx/store';
import * as fromReducer from '../../store/index';
import * as fromSelector from '../../store/message.selectors';
import { LodingSpinnerComponent } from 'src/app/shared/loding-spinner/loding-spinner.components';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatDividerModule,
    MatPaginatorModule,
    LodingSpinnerComponent,
  ],
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private store: Store<fromReducer.MessagesStateRIndex>,
    private cdr: ChangeDetectorRef
  ) {}
  displayedColumns: string[] = ['ID', 'Name', 'Message', 'Date'];
  dataSource!: MatTableDataSource<Message>;
  spiner: boolean = true;
  public messageText: string;
  total: number;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator; // For pagination
  pageEvent!: PageEvent;

  ngOnInit(): void {
    //ngrx store
    this.store.select(fromSelector.getMessagesAll).subscribe((data: any) => {
      this.total = data.length;
      this.dataSource = new MatTableDataSource<Message>(data);
      this.cdr.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.spiner = false;
    });
  }

  openDialog(): void {
    this.dialog.open(DialogFormComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'dialogC',
    });
  }

  openMsgDialog(msg: string): void {
    this.dialog.open(MessageDialog, {
      data: {
        messageText: msg,
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: '<h3>{{data?.messageText}}</h3>',
})
export class MessageDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
