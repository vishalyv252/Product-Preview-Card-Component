import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], // I didn't import any modules in this application.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /* I have declared these variables and storing the values in these variables for displaying the data at HTML page. */
  title : string = "Perfume";
  product_name : string = "Gabrielle Essence Eau De Parfum";
  product_description : string = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.";
  discount_price : string = "$149.99";
  actual_price : string = "$169.99";
  button_name : string = "Add to Cart";

}
