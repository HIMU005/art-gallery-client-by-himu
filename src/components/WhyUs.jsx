
const WhyUs = () => {
    return (
        <div>
            <h2 className="text-xl md:text-3xl font-bold text-center my-5">FAQ</h2>
            <div className=" flex flex-col gap-3">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Can I post my own photo
                    </div>
                    <div className="collapse-content">
                        <p>Yes</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I see other post?
                    </div>
                    <div className="collapse-content">
                        <p>Yes</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do I need to buy a subscription for browsing your website?
                    </div>
                    <div className="collapse-content">
                        <p>No. It is totally free</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;