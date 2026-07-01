

export const instagramData = [
    {
        link: 'https://www.instagram.com/p/DFmcTCXIKM2/?igsh=MXh5OGpuZml2dzkzcw%3D%3D',
        postDate: 4,
        like: 1000,
        image: 'https://admin.tabarrukziyorat.uz/media/instagram/Dayahatyn_caravanserai.jpg'
    },
    {
        link: 'https://www.instagram.com/p/DFmU5HJIbrc/?igsh=c2Mxa3JiODk4Mmw%3D',
        postDate:6,
        like:2350,
        image: 'https://admin.tabarrukziyorat.uz/media/instagram/The_complex_of_Imam_al-Bukhari_Uzbekistan_Samarkand.jpg'
    },
    {
    link: 'https://www.instagram.com/p/DFmYSIKIuPt/?igsh=MXdyMzNzYnQ2bmp6Mg%3D%3D   ',
    postDate:8.5 ,
    like:4579,
    image: 'https://admin.tabarrukziyorat.uz/media/instagram/Tabarruk_Ziyarat.jpg'
    },
     {
    link: 'https://www.instagram.com/p/DFmbKffIQPq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D',
    postDate:14 ,
    like:6142,
    image: 'https://admin.tabarrukziyorat.uz/media/instagram/Arystan_bab_mausoleum.jpg'
    },
     {
    link: 'https://admin.tabarrukziyorat.uz/media/instagram/Burana_Tower.jpg',
    postDate:31 ,
    like:39145,
    image: 'https://admin.tabarrukziyorat.uz/media/instagram/Burana_Tower.jpg'
    },
       {
    link: 'https://admin.tabarrukziyorat.uz/media/instagram/The_complex_of_Imam_al-Bukhari_Uzbekistan_Samarkand.jpg',
    postDate:47.12 ,
    like:50275,
    image: 'https://admin.tabarrukziyorat.uz/media/instagram/Juma_Mosque.jpg'
    },
]










interface ZiyoratGoh {
    id: number;
    title: string;
    location: string;
    imageUrl: string;
    likes: number;
    timeAgo: string;
}


const joylar: ZiyoratGoh[] = [
    {
        id: 1,
        title: "The complex of Imam al-Bukhari",
        location: "Samarkand, Uzbekistan",
        imageUrl: "https://unsplash.com",
        likes: 15,
        timeAgo: "2 days ago"
    },
    {
        id: 2,
        title: "Mosque of Malkoc Bey in Siklos",
        location: "Siklos, Hungary",
        imageUrl: "https://unsplash.com",
        likes: 15,
        timeAgo: "2 days ago"
    },
    {
        id: 3,
        title: "Arystan Baba Mausoleum",
        location: "Turkistan, Kazakhstan",
        imageUrl: "https://unsplash.com",
        likes: 20,
        timeAgo: "2 days ago"
    },
    {
        id: 4,
        title: "Burana Tower (Balasagun)",
        location: "Chuy Valley, Kyrgyzstan",
        imageUrl: "https://unsplash.com",
        likes: 13,
        timeAgo: "2 days ago"
    },
    {
        id: 5,
        title: "Juma Mosque",
        location: "Khiva, Uzbekistan",
        imageUrl: "https://unsplash.com",
        likes: 22,
        timeAgo: "2 days ago"
    }
];

