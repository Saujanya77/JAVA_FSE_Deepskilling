public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(104, "Laptop", "Electronics"),
            new Product(101, "T-shirt", "Clothing"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Book", "Stationery")
        };

        int targetId = 102;

        
        Product result1 = SearchUtil.linearSearch(products, targetId);
        System.out.println("Linear Search Result: " + result1);

        
        SearchUtil.sortProductsById(products);
        Product result2 = SearchUtil.binarySearch(products, targetId);
        System.out.println("Binary Search Result: " + result2);
    }
}
