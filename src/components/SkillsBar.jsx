import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LinearProgress from "@mui/material/LinearProgress";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

const SkillsBar = ({ name, percentage, tooltip, index, inView, showTooltip }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      >
        <div className="w-full">
          <div className="flex justify-between">
            <Typography variant="h6" color="white" gutterBottom>
              {name} 
              {showTooltip && (
                <Tooltip title={tooltip} sx={{ fontSize: '1.2rem' }}>
                <IconButton>
                  <InfoOutlinedIcon className="text-[#4F83CC]" />
                </IconButton>
              </Tooltip>
              
              
              )}
            </Typography>
            <Typography variant="h6" color="white" gutterBottom>
              {percentage}%
            </Typography>
          </div>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: 10,
              borderRadius: 5,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#4F83CC",
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default SkillsBar
