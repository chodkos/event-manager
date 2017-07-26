package pl.training.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.security.entity.User;

/**
 * Created by Raynor on 2017-07-26.
 */
@Service
public class MeetingService {


    private MeetingRepository meetingRepository;

    @Autowired
    public MeetingService(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    public Iterable<Meeting> findAllHotels() {
        return meetingRepository.findAll();
    }

    public void addMeeting(Meeting meeting){
        meetingRepository.saveAndFlush(meeting);
    }

    public ResultPage<Meeting> getMeetings(int pageNumber, int pageSize) {
        Page<Meeting> meetingPage = meetingRepository.findAll(new PageRequest(pageNumber, pageSize));
        return new ResultPage<>(meetingPage.getContent(), meetingPage.getNumber(), meetingPage.getTotalPages());
    }
}
