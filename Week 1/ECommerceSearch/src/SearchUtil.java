import java.util.Arrays;
import java.util.Comparator;

public class SearchUtil {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    // Binary Search (requires sorted array)
    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = low+(high-low) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    // Sort products by productId
    public static void sortProductsById(Product[] products) {
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
    }
}
