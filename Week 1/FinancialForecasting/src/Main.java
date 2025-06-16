public class Main {
    public static void main(String[] args) {
        double principal = 10000.0; // ₹10,000
        double rate = 0.10; // 10% growth
        int years = 5;

        double futureValueRecursive = Forecast.calculateFutureValue(principal, rate, years);
        double futureValueOptimized = Forecast.calculateFutureValueOptimized(principal, rate, years);

        System.out.printf("Recursive Future Value after %d years: ₹%.2f\n", years, futureValueRecursive);
        System.out.printf("Optimized Future Value after %d years: ₹%.2f\n", years, futureValueOptimized);
    }
}
