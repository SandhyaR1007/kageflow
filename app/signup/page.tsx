const Signup =()=>{
    return (<form action="" className="flex flex-col gap-4 items-center w-1/2 p-5">
        <label htmlFor="" className="flex flex-col gap-3">
            <span>Username</span>
            <input type="text" placeholder="Username"/>
        </label>
        <label htmlFor="" className="flex flex-col gap-3">
        <span>Email</span>
            <input type="email" placeholder="Email"/>
        </label>
        <label htmlFor="" className="flex flex-col gap-3">
        <span>Password</span>
            <input type="password" placeholder="Password"/>
        </label>
        <button type="submit"> Submit</button>
      </form>)
   
}

export default Signup;