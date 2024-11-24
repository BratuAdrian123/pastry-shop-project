function ContactAndAbout() {
  return (
    <div>
      <h2 className="text-center p-6 text-4xl">About us</h2>
      <div className="pb-5 mb-4 text-center mr-[10%] ml-[10%] about-content">
        <p>
          <strong>Pastry Shop</strong> is the Online Store dedicated to all
          those passionate about the art of confectionery, whether they are
          experienced professionals or enthusiasts exploring new recipes at
          home. We created our platform to provide easy access to a diverse
          range of ingredients, utensils and equipment needed to prepare top
          quality desserts
        </p>
      </div>
      <div className="pb-5 mb-4 text-center mr-[10%] ml-[10%] about-content">
        <p>
          <strong>What makes us special?</strong>
        </p>
        <p>
          At Pastry Shop, we pride ourselves on products tested by pastry
          experts and carefully selected to meet the most demanding requirements
          of pastry chefs. Whether you're looking for basic ingredients,
          professional tools, or modern decorating accessories, here you'll find
          everything you need to create memorable desserts.
        </p>
      </div>
      <div className="pb-5 mb-4 text-center mr-[10%] ml-[10%] about-content">
        <p>
          <strong>Our mission</strong>
        </p>
        <p>
          We want to make confectionery accessible to everyone, ensuring that
          anyone can find the products they need to turn every recipe into a
          delicious experience. The Pastry Shop is more than a shop – it's a
          community that brings together people who are passionate about sweet
          creation.
        </p>
      </div>
      <div className="pb-5 mb-4 text-center mr-[10%] ml-[10%] about-content">
        <p>
          <strong>Fast delivery and reliable support</strong>
        </p>
        <p>
          We are here to ensure a fast and comfortable shopping experience, with
          delivery throughout Romania and dedicated support for any question.
          For orders over 200$, we offer free delivery, so you can focus on what
          matters: your sweet creation!
        </p>
      </div>
      <div className="pb-5 mb-4 text-center mr-[10%] ml-[10%] about-content">
        <p>
          <strong>Every detail counts</strong>
        </p>
        <p>
          We know how important details are in confectionery, that's why we make
          sure that every product on the site is fully described and comes with
          the necessary recommendations for optimal use. Here you will find
          products that will save you time and help you create desserts worthy
          of the highest standards.
        </p>
      </div>
      <h2 className="text-center p-3 text-4xl">Contact</h2>
      <div className="flex-row">
        <h3 className="text-center p-3 text-2xl">Phone Numbers</h3>
        <div className="contact-info-container ml-[10%] mr-[10%] flex mb-5 justify-around">
          <div className="flex justify-center items-center contact-info-section-container">
            <img src="pictures/phone.png" className="w-[30px] mr-3" />
            <p>0799999999</p>
          </div>

          <div className="flex justify-center items-center contact-info-section-container">
            <img src="pictures/phone.png" className="w-[30px] mr-3" />
            <p>0799999998</p>
          </div>
        </div>
        <h3 className="text-center p-3 text-2xl">Whatsapp</h3>
        <div className="contact-info-container ml-[10%] mr-[10%] flex mb-5 justify-around">
          <div className="flex justify-center items-center contact-info-section-container">
            <img src="pictures/whatsapp.png" className="w-[30px] mr-3" />
            <p>(+04) 0799 999 999</p>
          </div>

          <div className="flex justify-center items-center contact-info-section-container">
            <img src="pictures/whatsapp.png" className="w-[30px] mr-3" />
            <p>(+04) 0799 999 998</p>
          </div>
        </div>
        <h3 className="text-center p-3 text-3xl">Support</h3>
        <div className="contact-info-container-support ml-auto mr-auto flex-row mb-5 w-fit p-2 h-auto">
          <div className="flex justify-center items-center contact-info-section-container-support mt-2">
            <img src="pictures/support.png" className="w-[30px] mr-1" />
            <p>0799999997</p>
          </div>

          <div className="flex justify-center items-center contact-info-section-container-support mt-2">
            <img src="pictures/support.png" className="w-[30px] mr-1" />
            <p>(+04) 0799 999 997</p>
          </div>

          <div className="flex justify-center items-center contact-info-section-container-support mt-2">
            <img src="pictures/support.png" className="w-[30px] mr-1" />
            <p>
              <a href="pastryshop-support@gmail.com">
                pastryshop-support@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAndAbout;
