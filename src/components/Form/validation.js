export default (data) => {
    let errors = {}

    if (!data.email.includes('@')) {
        errors.e1 = 'Email is not valid.';
    }

    if (!data.email){
        errors.e2= "Email can't be blank."
    }

    if (data.email.length > 35) {
        errors.e3 = "Email is too long."
    }

    if (!/\d/.test(data.password)){
        errors.p1 = "Password should include at least a number"
    }

    if (data.password.length < 6 || data.password > 10) {
        errors.p2 = "Your password don't have the right length"
    }

    return errors;
}