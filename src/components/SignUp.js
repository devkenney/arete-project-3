import React from "react";

function SignUp(props) {
    return (
        <div>
            <h1>Create Your Account</h1>

            <form>
                <div>
                    <label htmlFor="username">USERNAME</label>
                    <input type="text" name="username" onChange={props.handleInPut} />
                </div>
                
                <div>
                    <label>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="text" name="password" onChange={props.handleInPut} />
                    </label>
                </div>
                <input type="submit" value="Submit" onClick={handleSignUp} />
            </form>
        </div>
    );
}

export default SignUp;