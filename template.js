function Template() {
    this.variables = {
        "app-name": "S3MT",
        "app-version": "2.0.1"
    }

    this.renderVariables = () => {
        Object.keys(this.variables).forEach(variable => {
            var value = this.variables[variable]
            $("*[data-value='" + variable + "']").text(value)
        })
    }

    yeet = true;
}
