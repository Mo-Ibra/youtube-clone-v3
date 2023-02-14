import Loader from "../Loader/Loader";
import { Stack, Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return <Loader />

    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos;