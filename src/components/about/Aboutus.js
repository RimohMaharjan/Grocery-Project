import React from "react";

function Aboutus() {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          fontSize: "35px",
          width: "200px",
          padding: "10px",
         
          justifyContent: "center",
          margin: "auto",
        }}
      >
        About Us
      </h2>
      <div class="privacy about">
        <div>
          <p class="animi">
          Tempor id eu nisl nunc. Dignissim cras tincidunt lobortis feugiat vivamus at. Tristique nulla aliquet enim tortor at auctor urna. Elementum integer enim neque volutpat ac. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.
          </p>
        </div>
        <div class="agile_about_grids" style={{ display: "flex" }} >
          <div class="col-md-6 agile_about_grid_right">
            <img src="assets/images/31.jpg" alt=" " class="img-responsive" />
          </div>
          <div class="col-md-6 agile_about_grid_left">
            <ol style={{ backgroundColor: "white" }}>
              <li>laborum et dolorum fuga</li>
              <li>corrupti quos dolores et quas</li>
              <li>est et expedita distinctio</li>
              <li>deleniti atque corrupti quos</li>
              <li>excepturi sint occaecati cupiditate</li>
              <li>accusamus et iusto odio</li>
            </ol>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
