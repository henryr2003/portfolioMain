



export default function Contact(){




    return (
        <>


            <form
                action="https://formspree.io/f/mgvnrogb"
                method="POST"
            >
             
                    Your email:
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Email"/>
            
           
                    Your message:
                    <textarea name="message" placeholder="Enter your message here"></textarea>
              
                
                <button type="submit">Send</button>
            </form>
            

        </>
    )
}