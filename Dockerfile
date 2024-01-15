FROM quay.io/Ndelevamutua/md:beta
RUN git clone https://github.com/ndelevamutua/ndelevabot.git /root/ndeleva/
WORKDIR /root/Ndelevamutua/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
