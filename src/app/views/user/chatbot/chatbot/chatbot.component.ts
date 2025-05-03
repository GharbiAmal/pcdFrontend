import { Component, OnInit } from '@angular/core';
import { ApichatService } from 'src/app/views/services/apichat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private apiService:ApichatService) { }

  question = '';
  isLoading = false;
  response: any;
  ngOnInit(): void {
  }

  submitQuestion() {
    if (!this.question.trim()) return;

    this.isLoading = true;
    this.response = null;

    this.apiService.askQuestion(this.question).subscribe({
      next: (res) => {
        console.log('Réponse API:', res);
        this.response = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur API:', err);
        this.response = {
          success: false,
          message: 'Erreur de connexion à l\'API'
        };
        this.isLoading = false;
      }
    });
  }
}
