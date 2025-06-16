public class Forecast {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        } else {
            return calculateFutureValue(principal, rate, years - 1) * (1 + rate);
        }
    }

    // Optimized (tail recursion-like) method using loop
    public static double calculateFutureValueOptimized(double principal, double rate, int years) {
        double result = principal;
        for (int i = 1; i <= years; i++) {
            result *= (1 + rate);
        }
        return result;
    }
}
