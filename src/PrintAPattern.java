import java.util.Scanner;

public class PrintAPattern {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of levels for the triangle: ");

        int levels = scanner.nextInt();

        scanner.close();

        for (int i = 1; i <= levels; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
