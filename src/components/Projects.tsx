import React from "react";

function ImageDescription({ imageSrc, description, reverse }: any) {
  // Determine the order of image and content based on the 'reverse' prop
  const imageOrder = reverse ? "order-2" : "order-1";
  const contentOrder = reverse ? "order-1" : "order-2";

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Image */}
      <div className={`w-full md:w-1/2 ${imageOrder} mb-4 md:mb-0`}>
        <img src={imageSrc} alt="Image" className="w-full h-auto" />
      </div>
      {/* Description */}
      <div className={`w-full md:w-1/2 ${contentOrder} px-4 md:px-8`}>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className="bg-sky-500">
      Thumbnail/Icon with left/ right design. One side image other side
      description
      <div className=" mx-auto p-8 flex flex-col gap-10">
        <ImageDescription
          imageSrc="image1.jpg"
          description="Description for Image 1"
          reverse={false} // Start with image on the left
        />
        <ImageDescription
          imageSrc="image2.jpg"
          description="Description for Image 2"
          reverse={true} // Start with image on the right
        />
        <ImageDescription
          imageSrc="image2.jpg"
          description="Description for Image 2"
          reverse={false} // Start with image on the right
        />
        <ImageDescription
          imageSrc="image2.jpg"
          description="Description for Image 2"
          reverse={true} // Start with image on the right
        />
      </div>
    </div>
  );
};

export default Projects;
