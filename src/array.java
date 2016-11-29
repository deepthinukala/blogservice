import java.util.Scanner;

public class array {

	
	public static void main(String args[]){
		
		    for (int i = 0; i < args.length; i++) {

		        boolean duplicate = false;
		        int j = 0;

		        while (j < i){

		            if ((i != j) && args[i] == args[j]) {
		                duplicate = true;
		            }

		            j++;
		        }

		        if (duplicate) {
		            System.out.print(args[i] + " ");
		        }
		    }
		}
		
	}
