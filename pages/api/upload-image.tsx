import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Disable Next.js body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing form data' });
      }

      const file = files.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      try {
        // Upload the file to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(file.filepath, {
          folder: 'profiles',
        });

        // Return the uploaded image URL
        const profileUrl = uploadResult.secure_url;
        return res.status(200).json({ profileUrl });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to upload image' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
