import { Component } from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  componentToShow = 'welcome';

  constructor(private axiosService: AxiosService) {


  }

  showComponent(componentToShow: string) {
    this.componentToShow = componentToShow;
  }

  onLogin(input: any): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    })
  }
  onRegister(input: any): void {
    console.log(input)
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstname: input.firstName,
        lastname: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response => {this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    })
  }
}
