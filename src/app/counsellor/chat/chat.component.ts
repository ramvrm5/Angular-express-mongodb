import { Component, OnInit} from '@angular/core';
import { SocketService } from 'src/app/core/services/socket/socket.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  user = {
    "room": '',
    "name": '',
    "id": 0,
    "message": '',
    "type": ''
  }
  sessions =  ['Test'];
  messageList: any[] = [];
  accessCode;;
  showSession = true;
  client = ''

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit() { }

  joinSession() {
    this.user.room = this.accessCode;
    this.user.id = Math.random();
    this.user.name = prompt('Enter username');
    this.socketConnection();
    this.getMessages();
    

  }

  socketConnection() {
    this.socketService.setupSocketConnection();
    this.socketService.joinRoom(this.user);
    this.socketService.roomConfirmation().subscribe(user => {
      user.message = `${user.name} has joined`;
      user.type = 'JOIN';
      this.messageList.push(user);
    })
  }

  senMessageOnEnter(event) {
    if(event.keyCode === 13) {
      this.socketService.sendMessage(this.user);
      this.user.message = '';
    }
  }

  sendMessage() {
      this.socketService.sendMessage(this.user);
      this.user.message = '';
      this.scroll()   
  }

  getMessages() {
    this.socketService
      .getMessages()
      .subscribe((messages: any) => {
        if(messages.id != this.user.id) {
          this.client = messages.name
        }
       this.messageList.push(messages);
        this.scroll()
      });
  }

  scroll() {
    setTimeout(() => {
      document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight;
    },100)
  }
}
