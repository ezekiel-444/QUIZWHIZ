
        public class SimpleMathOperations {
            public static void main(String[] args) {

                double num1 = 10;
                double num2 = 5;


                double sum = num1 + num2;
                double difference = num1 - num2;
                double product = num1 * num2;

                double quotient = num2 != 0 ? num1 / num2 : Double.POSITIVE_INFINITY;

                System.out.println("Number 1: " + num1);
                System.out.println("Number 2: " + num2);
                System.out.println("Sum: " + sum);
                System.out.println("Difference: " + difference);
                System.out.println("Product: " + product);

                if (num2 != 0) {
                    System.out.println("Quotient: " + quotient);
                } else {
                    System.out.println("Cannot divide by zero.");
                }
            }
        }


