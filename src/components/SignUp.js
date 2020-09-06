import React from "react";

function SignUp(props) {
    return (
        <div>
            <h1>Create Your Account</h1>

            <form>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="text" name="email" onChange={props.handleInPut} />
                </div>
                
                <div>
                    <label>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="text" name="password" onChange={props.handleInPut} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
                <p>Already have an account? Log in <a href="#">here.</a></p>
            </form>
        </div>
    );
}

export default SignUp;