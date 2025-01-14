import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

class Pair<E, K> {
    E key;
    K value;

    public Pair(E key, K value) {
        this.key = key;
        this.value = value;
    }

    public E getKey() {
        return key;
    }

    public K getValue() {
        return value;
    }
}

public class x {

    public static void main(String[] args) {
        // int[][] events = { { 1, 3, 2 }, { 4, 5, 2 }, { 1,5,5 } };
        // PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        // Arrays.sort(events, (a, b) -> a[0] - b[0]);

        // int maxVal = 0, maxSum = 0;

        // for (int[] event : events) {
        //     // Poll all valid events from queue and take their maximum.
        //     while (!pq.isEmpty() && pq.peek()[0] < event[0]) {
        //         maxVal = Math.max(maxVal, pq.peek()[1]);
        //         pq.poll();
        //     }

        //     maxSum = Math.max(maxSum, maxVal + event[2]);
        //     pq.add(new int[] { event[1], event[2] });
        // }
        // System.out.println(maxSum);

        // int[] arr = new int[2];
        // while (!pq.isEmpty()) {
        // arr = pq.poll();
        // System.out.println(arr[0] + " " + arr[1]);

        // }
        System.out.println(Math.floor(Math.sqrt(49)));
    }
}