import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div>
      {/* Top Image */}
      <div className="top-image">
        <img src="https://missbui.wordpress.com/wp-content/uploads/2013/01/02_interior_860.jpg" alt="Top Image" className="top-image"/>
      </div>
      
      {/* About our Cooks Section */}
      <section className="about-cooks">
        <h1>About our cooks</h1>
        <div className="cook-list">
          {/* Cook 1 */}
          <div className="cook">
          <img src="https://images.squarespace-cdn.com/content/v1/60162ddc2e514a5b86ec5379/5badf85b-a886-4fac-b347-03bafff8b752/Sweet+Munchies+image+MyDramaList.png" alt="Chef Kim" className="cook-image"/>
            <h2>Chef Kim</h2>
            <h3>Head Chef</h3>
            <p>As a legendary top Korean chef, my journey has been one of relentless passion and dedication. From perfecting traditional recipes to innovating modern fusion dishes, I have always strived to elevate Korean cuisine to new heights. My achievements include numerous prestigious awards, a Michelin star, and the honor of being a culinary ambassador for my country. Each dish I create is a testament to my love for cooking, a reflection of my commitment to preserving the rich flavors and traditions of Korea, while also pushing the boundaries of culinary art.</p>
          </div>
          {/* Cook 2 */}
          <div className="cook">
          <img src= "https://img.freepik.com/premium-photo/handsome-korean-chef-preparing-food-kitchen_46383-5613.jpg" alt="Chef Lee" className="cook-image"/>
            <h2>Chef Lee</h2>
            <h3>Sous Chef</h3>
            <p>Growing up poor, I learned the value of every ingredient and the joy of cooking for my family. Those humble meals, made with love and creativity, sparked my passion for cooking. As I grew older, I knew I wanted to share the flavors of my childhood with the world. Today, as a famous chef in Korea, I strive to bring the same warmth and comfort to every dish I create, honoring the simple, yet rich, culinary traditions that shaped my early years.</p>
          </div>
          {/* Cook 3 */}
          <div className="cook">
            <img src="https://img.freepik.com/premium-photo/handsome-korean-chef-preparing-food-kitchen_983424-16413.jpg" alt="Chef Park" className="cook-image"/>
            <h2>Chef Park</h2>
            <h3>Pastry Chef</h3>
            <p>As a young chef in my early twenties, I cherish the memories of cooking for my grandmother, the woman who raised me and taught me the true meaning of love and care. The kitchen became our sacred space, where I discovered my passion for cooking. Now, I aim to give to others the same warmth I shared with her, using food as my medium. I am constantly exploring new flavors, combining the comfort of tradition with the excitement of innovation, always seeking to create dishes that touch the heart.</p>
          </div>
          {/* Cook 4 */}
          <div className="cook">
            <img src="https://i.pinimg.com/originals/4b/8e/d0/4b8ed0977abc2c06e45235d2bfa0925b.jpg" alt="Chef Choi" className="cook-image"/>
            <h2>Chef Choi</h2>
            <h3>Junior Chef</h3>
            <p>Raised in a privileged environment, I had the unique opportunity to travel the world from a young age, immersing myself in the diverse culinary traditions of various cultures. These experiences sparked a profound passion for food and a desire to blend the global flavors I encountered into innovative Korean fusion cuisine. Leaving the comforts of home, I embarked on a journey to pursue my culinary dreams. Today, as the owner of a five-star Michelin restaurant, I am dedicated to constantly exploring new ideas, merging tradition with innovation. Alongside my restaurant, I manage several other companies, always striving to push the boundaries of the culinary world and redefine excellence.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;