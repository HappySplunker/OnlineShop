package onlineShop.OnlineShop;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Product {



        private @Id
        @GeneratedValue
        Long id;
        private String title;
        private double price;
        private String description;

        private Product() {}

        public Product(String title, double price, String description) {
            this.title = title;
            this.price = price;
            this.description = description;
        }
    }

