import { SocketChatService } from './../../services/socket-chat.service';
import { Message } from './../../../../interfaces/message.interface';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() userId!:string;
  listMessages:any;
  public totalMessagesUser:number = 0;
  public totalMessagesContact: number = 0;
  public datos:any = [];

  constructor(private chatService:ChatService, private socketService:SocketChatService) {
    this.socketService.callbak.subscribe(res => {
      console.log(res);
      this.listMessages = res;
    })
  }

  ngOnInit(): void {

  }

  sumarMessagesUser() {
    this.totalMessagesUser++;
  }

}