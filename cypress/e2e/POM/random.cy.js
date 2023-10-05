class random {

    generatestring() {

        let r = (Math.random()).toString(36).substring(7);

        console.log("random", r);

        return r
    }

}

export default random;