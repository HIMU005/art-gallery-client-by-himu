import { toast } from "react-toastify";

const Feedback = () => {

    const handleFeedback = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const name = form.name.value;
        const feedback = form.name.value;

        const feedbackItem = { email, name, feedback };

        fetch('https://authentication-and-simple-database-server.vercel.app/feedback', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(feedbackItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("FeedBack posted successfully");
                    form.reset();
                }
            })
    }


    return (
        <div>
            <h2 className="text-xl md:text-3xl font-bold text-center my-5">Give us your feedback</h2>
            <form onSubmit={handleFeedback}>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-base font-medium text-secondary">What is your name?</span>
                    </div>
                    <input type="text" name="name" placeholder="Enter your name" required className="input input-bordered input-secondary w-full " />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-base font-medium text-primary">What is your email?</span>
                    </div>
                    <input type="email" name="email" placeholder="Enter your name" required className="input input-bordered input-primary w-full " />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-base font-medium text-secondary">Enter your feedback</span>
                    </div>
                    <input type="text" name="feed" placeholder="Enter your name" required className="input input-bordered input-secondary w-full " />
                </label>

                <input className="btn btn-success btn-outline w-full mt-3" type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Feedback;