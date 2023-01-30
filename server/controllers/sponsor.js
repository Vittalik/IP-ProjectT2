import {db} from "../db.js";

export const getSponsors = (req,res)=>{
    const q = "SELECT * FROM sponsors";

        db.query(q, (err,data)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        })
};



export const addSponsor = (req,res)=>{
      const q =
        "INSERT INTO sponsors(`name_sponsor`, `img_sponsor`, `link`, `edition`) VALUES (?)";
  
      const values = [
        req.body.name_sponsor,
        req.body.img_sponsor,
        req.body.link,
        req.body.edition,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err + "hellolololo");
        return res.json("Sponsor has been created.");
      });
};



export const deleteSponsor = (req,res)=>{
      const sponsorId = req.params.id;
      const q = "DELETE FROM sponsors WHERE `id` = ?";
  
      db.query(q, [sponsorId], (err, data) => {
        return res.json("Sponsor has been deleted!");
      });
} 



export const updateSponsor = (req,res)=>{

    const postId = req.params.id;
    const q =
      "UPDATE sponsors SET `name_sponsor`=?,`img_sponsor`=?,`link`=?,`edition`=? WHERE `id` = ?";

    const values = [req.body.name_sponsor, 'nordic_museum_logo.png', req.body.link, req.body.edition];

    db.query(q, [...values, postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Sponsor has been updated.");
    });
}

