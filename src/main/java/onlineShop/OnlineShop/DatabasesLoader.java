package onlineShop.OnlineShop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabasesLoader implements CommandLineRunner {
    private final ProductRepository repository;

    @Autowired
    public DatabasesLoader(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Product("Frodo", 4.50, "ring bearer"));
    }
}
