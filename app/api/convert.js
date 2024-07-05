// pages/api/convert.js
import mammoth from 'mammoth';
import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  const { filePath } = req.query;

  if (!filePath) {
    return res.status(400).json({ error: 'File path is required' });
  }

  try {
    const fullPath = path.join(process.cwd(), filePath);
    const buffer = fs.readFileSync(fullPath);
    const result = await mammoth.convertToHtml({ buffer });
    res.status(200).json({ html: result.value });
  } catch (error) {
    console.error('Error converting document:', error);
    res.status(500).json({ error: 'Error converting document' });
  }
}
