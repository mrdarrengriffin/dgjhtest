function Template() {
    
    this.variables = {
        "app-name": "S3MT",
        "app-version": "2.0.0"
    }

    this.renderVariables = function() {
        Object.keys(this.variables).forEach(variable => {
            var value = this.variables[variable]
            $("*[data-value='" + variable + "']").text(value)
        })
    }
}