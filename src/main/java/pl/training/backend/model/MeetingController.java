package pl.training.backend.model;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.security.dto.UserDto;
import pl.training.backend.security.dto.UsersPageDto;
import pl.training.backend.security.entity.User;

import java.net.URI;
import java.util.List;

import static org.springframework.http.ResponseEntity.created;

/**
 * Created by Raynor on 2017-07-26.
 */

@Api(description = "Meetings resource")
@RestController
public class MeetingController {

    private Mapper mapper;
    private MeetingService meetingService;
    private UriBuilder uriBuilder = new UriBuilder();


    public MeetingController(Mapper mapper, MeetingService meetingService) {
        this.mapper = mapper;
        this.meetingService = meetingService;
    }

  /*  @ApiOperation(value = "Get meetings", response = MeetingPageDto.class)
    @RequestMapping(method = RequestMethod.GET)*/
  @RequestMapping(value = UriBuilder.PREFIX + "/meetings")
    public MeetingPageDto getMeetings(
            @RequestParam(required = false, defaultValue = "0", name = "pageNumber") int pageNumber,
            @RequestParam(required = false, defaultValue = "10", name = "pageSize") int pageSize) {
        ResultPage<Meeting> resultPage = meetingService.getMeetings(pageNumber, pageSize);
        List<MeetingDto> meetingDtos = mapper.map(resultPage.getContent(), MeetingDto.class);
        return new MeetingPageDto(meetingDtos, resultPage.getPageNumber(), resultPage.getTotalPages());
    }

    @ApiOperation(value = "Create new meeting")
    @RequestMapping(value = UriBuilder.PREFIX + "/addMeeting", method = RequestMethod.POST)
    public ResponseEntity createUser(@ApiParam(name = "meeting") @RequestBody MeetingDto meetingDto) {
        Meeting meeting = mapper.map(meetingDto, Meeting.class);
        meetingService.addMeeting(meeting);
        URI uri = uriBuilder.requestUriWithId(meeting.getId());
        return created(uri).build();
    }

}
