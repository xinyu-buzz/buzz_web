# Images & Screenshots Guide

## 📱 Where to Store App Screenshots

### For Buzz Workforce App Screenshots

Store your iPhone app screenshots in:
```
/Users/xinyufang/Documents/Buzz_web/public/screenshots/
```

### Screenshot Naming Convention

Name your files like this:
- `workforce-1.png` - First screenshot
- `workforce-2.png` - Second screenshot
- `workforce-3.png` - Third screenshot

The page is already configured to display 3 screenshots in a grid layout.

### Steps to Add Screenshots

1. **Create the screenshots folder:**
```bash
mkdir -p /Users/xinyufang/Documents/Buzz_web/public/screenshots
```

2. **Add your app screenshots:**
   - Take screenshots from your iPhone app (or get them from App Store Connect)
   - Name them: `workforce-1.png`, `workforce-2.png`, `workforce-3.png`
   - Copy them to the `public/screenshots/` folder

3. **Recommended screenshot format:**
   - Format: PNG or JPG
   - Size: iPhone screenshots (1170 x 2532px for iPhone 13 Pro or similar)
   - Aspect ratio: 9:19 (portrait orientation)

## 🔲 QR Code Setup

### For the Buzz Workforce QR Code

I noticed you provided a QR code image. Here's how to add it:

1. **Save the QR code image** (the one you shared) as:
```
/Users/xinyufang/Documents/Buzz_web/public/buzz-workforce-qr.png
```

2. **The QR code should:**
   - Link to: https://apps.apple.com/us/app/buzz-air/id6755077577
   - Format: PNG (preferred) or JPG
   - Size: Recommended 400x400px or higher for quality

### How to Save the QR Code:
1. Right-click the QR code image you have
2. Save it as `buzz-workforce-qr.png`
3. Move it to `/Users/xinyufang/Documents/Buzz_web/public/`

## 📂 Complete Folder Structure

After adding all images, your public folder should look like this:

```
/Users/xinyufang/Documents/Buzz_web/public/
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── buzz-workforce-qr.png          ← Add this (your QR code)
├── screenshots/
│   ├── workforce-1.png             ← Add these (app screenshots)
│   ├── workforce-2.png
│   └── workforce-3.png
└── site.webmanifest
```

## 🎨 What I've Updated in the Code

### Workforce Page Now Includes:

1. ✅ **Correct App Store Link**
   - Updated to: https://apps.apple.com/us/app/buzz-air/id6755077577

2. ✅ **QR Code Display**
   - Shows below the download button
   - Text: "Or scan to download"
   - White background with shadow for easy scanning
   - Size: 160x160px display size

3. ✅ **Screenshot Grid**
   - 3-column grid on desktop
   - Single column on mobile
   - Automatically handles missing images with placeholder
   - Hover animation for interactivity

## 🚀 Quick Start Commands

```bash
# Create screenshots folder
mkdir -p /Users/xinyufang/Documents/Buzz_web/public/screenshots

# Navigate to public folder
cd /Users/xinyufang/Documents/Buzz_web/public

# Then manually copy your images:
# - Copy QR code to: buzz-workforce-qr.png
# - Copy screenshots to: screenshots/workforce-1.png, workforce-2.png, workforce-3.png
```

## 💡 Pro Tips

1. **High Quality Images**: Use high-resolution images (2x or 3x) for retina displays
2. **Optimize File Size**: Use tools like TinyPNG to compress images without quality loss
3. **Test on Mobile**: Make sure QR code scans properly on different devices
4. **Consistent Look**: Keep screenshot backgrounds and styling consistent

## 📱 Getting Screenshots from App Store Connect

If you have screenshots in App Store Connect:
1. Go to App Store Connect → Your App → App Store tab
2. Download the iPhone screenshots you've uploaded
3. Rename them to match the naming convention above
4. Copy to the screenshots folder

## ✅ Verification Checklist

After adding images, verify:
- [ ] QR code image is in `/public/buzz-workforce-qr.png`
- [ ] QR code scans to the correct App Store link
- [ ] Screenshots are in `/public/screenshots/` folder
- [ ] Screenshot files are named correctly (workforce-1.png, etc.)
- [ ] Run `npm run dev` and check the Workforce page
- [ ] Test QR code scanning with phone camera

## 🆘 Troubleshooting

**QR code doesn't appear:**
- Check file name is exactly `buzz-workforce-qr.png`
- Check file is in `/public/` folder (not `/public/screenshots/`)

**Screenshots show placeholder:**
- Check files are in `/public/screenshots/` folder
- Check file names match exactly: `workforce-1.png`, `workforce-2.png`, `workforce-3.png`
- Check file format is PNG or JPG

Need help? Contact support@buzz.com

