#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
int main() {
    double x;
    cin >> x;
    double result = sin(x) + sqrt(log(3 * x) / log(4)) + ceil(3 * exp(x));
    cout << fixed << setprecision(6) << result << endl;
    return 0;
}
