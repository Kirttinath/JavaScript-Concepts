const WebpartFieldFillCheck = (tabsData) => {
    if (tabsData) {
        if (tabsData?.length === 0) {
            return false;
        } else {
            const values = Object.values(tabsData?.[0]);
            console.log(values, "ffff");

            //! Function to check if a value contains HTML tags
            const isHTMLString = (value) => {
                //! Regular expression to detect HTML tags
                const htmlRegex = /<[^>]+>/g;
                return typeof value === "string" && htmlRegex.test(value);
            };

            return values?.some(
                //! Return false if it's an HTML string
                (value) => value !== "" && !isHTMLString(value)
            );
        }
    }
    return false;
};






const WebpartFieldFillCheck = (tabsData) => {
    if (tabsData) {
        if (tabsData?.length === 0) {
            return false;
        } else {
            return Object.values(tabsData?.[0])?.some(
                (value) => value !== ""
            );
        }
    }
};