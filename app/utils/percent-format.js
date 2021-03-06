import numeral from "numeral";
import isNumber from "./is-number";

export default function percentFormat(value) {
    // value should be infinity when dividing by 0 so default to 100%
    if (value === Number.POSITIVE_INFINITY) {
        value = 1;
    } else if (value === Number.NEGATIVE_INFINITY) {
        value = -1;
        // value should be NaN when doing 0 / 0 so default to 0%
    } else if (!isNumber(value)) {
        value = 0;
    }

    if (value > 1 || value < -1) {
        value /= 100;
    }

    return numeral(value).format('0.0%');
}