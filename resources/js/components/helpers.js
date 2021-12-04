class WbfHelpers {
    smallDescription(content) {
        let points = content.length > 99 ? "..." : "";
        let output = content.substr(0, 100) + points;
        return output;
    }
}

export default new WbfHelpers();
