#include <iostream>
using namespace std;
int main() {
    int n, i = 1; 
    cout << "Nhap so nguyen duong n: ";
    cin >> n;
    cout << "Cac uoc so cua " << n << " la: ";
    while (i <= n) {
        if (n % i == 0) {
            cout << i << " ";  
        }
        i++;
    }
    cout << endl;
    return 0;
}
