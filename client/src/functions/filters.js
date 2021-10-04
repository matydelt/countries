
export function filterOrderName(countries, flag) {
    if (flag) {
        countries.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    } else {
        countries.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }
}
export function filterOrderArea(countries, flag) {
    if (flag) {
        countries.sort(function (a, b) {
            if (a.area < b.area) {
                return 1;
            }
            if (a.area > b.area) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    } else {
        countries.sort(function (a, b) {
            if (a.area > b.area) {
                return 1;
            }
            if (a.area < b.area) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }

}
