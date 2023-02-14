import { Stack, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Videos from "../Videos/Videos";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then(data => {
            setVideos(data.items)
            console.log(data);
        })
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Box sx={{ height: { xs: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                    Copyright © 2022 JSM Media
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed;
