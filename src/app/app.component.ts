import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mimimi';
  public mimimi;
  public content;
  public separador;
  public vocales;

  constructor(){
      this.mimimi = 'Mimimi';
      this.content = '';
      this.separador = "";
      this.vocales = ['A', 'E', 'O', 'U'];
  }

  change(text){
      this.content = document.getElementById("text").value;
      this.content = this.content.toUpperCase();
      this.content = this.content.split(this.separador);
      for(let i = 0; i < this.content.length; i++){
          for(let j = 0; j < 4; j++){
              if(this.content[i] == this.vocales[j]){
                  this.content[i] = "I";
              }
          }
      }

      console.log(this.content);
  }

}
